// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"spkvpenergy/ocapi/models"
)

// NewDeviceIndexParams creates a new DeviceIndexParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewDeviceIndexParams() *DeviceIndexParams {
	return &DeviceIndexParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewDeviceIndexParamsWithTimeout creates a new DeviceIndexParams object
// with the ability to set a timeout on a request.
func NewDeviceIndexParamsWithTimeout(timeout time.Duration) *DeviceIndexParams {
	return &DeviceIndexParams{
		timeout: timeout,
	}
}

// NewDeviceIndexParamsWithContext creates a new DeviceIndexParams object
// with the ability to set a context for a request.
func NewDeviceIndexParamsWithContext(ctx context.Context) *DeviceIndexParams {
	return &DeviceIndexParams{
		Context: ctx,
	}
}

// NewDeviceIndexParamsWithHTTPClient creates a new DeviceIndexParams object
// with the ability to set a custom HTTPClient for a request.
func NewDeviceIndexParamsWithHTTPClient(client *http.Client) *DeviceIndexParams {
	return &DeviceIndexParams{
		HTTPClient: client,
	}
}

/* DeviceIndexParams contains all the parameters to send to the API endpoint
   for the device index operation.

   Typically these are written to a http.Request.
*/
type DeviceIndexParams struct {

	// Body.
	Body *models.DeviceIndexRequest

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the device index params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeviceIndexParams) WithDefaults() *DeviceIndexParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the device index params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *DeviceIndexParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the device index params
func (o *DeviceIndexParams) WithTimeout(timeout time.Duration) *DeviceIndexParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the device index params
func (o *DeviceIndexParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the device index params
func (o *DeviceIndexParams) WithContext(ctx context.Context) *DeviceIndexParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the device index params
func (o *DeviceIndexParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the device index params
func (o *DeviceIndexParams) WithHTTPClient(client *http.Client) *DeviceIndexParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the device index params
func (o *DeviceIndexParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the device index params
func (o *DeviceIndexParams) WithBody(body *models.DeviceIndexRequest) *DeviceIndexParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the device index params
func (o *DeviceIndexParams) SetBody(body *models.DeviceIndexRequest) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *DeviceIndexParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
