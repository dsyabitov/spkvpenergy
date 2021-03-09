package main

import (
	"errors"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"net/http"
	"os"
	"strings"
)

func configureLogger(conf Conf) error {
	levelEnc := zapcore.CapitalColorLevelEncoder

	encCfg := zapcore.EncoderConfig{
		// Keys can be anything except the empty string.
		TimeKey:        "T",
		LevelKey:       "L",
		NameKey:        "N",
		CallerKey:      "C",
		MessageKey:     "M",
		StacktraceKey:  "S",
		LineEnding:     zapcore.DefaultLineEnding,
		EncodeLevel:    levelEnc,
		EncodeTime:     zapcore.ISO8601TimeEncoder,
		EncodeDuration: zapcore.StringDurationEncoder,
		EncodeCaller:   zapcore.ShortCallerEncoder,
	}

	encoder := zapcore.NewConsoleEncoder(encCfg)

	var level zap.AtomicLevel
	switch strings.ToLower(conf.LogLevel) {
	case "info":
		level = zap.NewAtomicLevelAt(zapcore.InfoLevel)
		break
	case "debug":
		level = zap.NewAtomicLevelAt(zapcore.DebugLevel)
		break
	case "warn":
		level = zap.NewAtomicLevelAt(zapcore.WarnLevel)
		break
	case "error":
		level = zap.NewAtomicLevelAt(zapcore.ErrorLevel)
		break
	default:
		return errors.New("unknown log level")
	}

	l := zap.New(zapcore.NewCore(encoder, os.Stdout, level))
	l = l.WithOptions(zap.AddCaller())

	zap.ReplaceGlobals(l)

	zap.S().Info("logging configured")
	return nil
}

func RequestLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		zap.S().Infof("%s - %s", r.Method, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}
