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

	strfmt "github.com/go-openapi/strfmt"

	models "spkvpenergy/ocapi/models"
)

// NewParametersDataParams creates a new ParametersDataParams object
// with the default values initialized.
func NewParametersDataParams() *ParametersDataParams {
	var ()
	return &ParametersDataParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewParametersDataParamsWithTimeout creates a new ParametersDataParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewParametersDataParamsWithTimeout(timeout time.Duration) *ParametersDataParams {
	var ()
	return &ParametersDataParams{

		timeout: timeout,
	}
}

// NewParametersDataParamsWithContext creates a new ParametersDataParams object
// with the default values initialized, and the ability to set a context for a request
func NewParametersDataParamsWithContext(ctx context.Context) *ParametersDataParams {
	var ()
	return &ParametersDataParams{

		Context: ctx,
	}
}

// NewParametersDataParamsWithHTTPClient creates a new ParametersDataParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewParametersDataParamsWithHTTPClient(client *http.Client) *ParametersDataParams {
	var ()
	return &ParametersDataParams{
		HTTPClient: client,
	}
}

/*ParametersDataParams contains all the parameters to send to the API endpoint
for the parameters data operation typically these are written to a http.Request
*/
type ParametersDataParams struct {

	/*Body*/
	Body *models.ParametersDataReq

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the parameters data params
func (o *ParametersDataParams) WithTimeout(timeout time.Duration) *ParametersDataParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the parameters data params
func (o *ParametersDataParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the parameters data params
func (o *ParametersDataParams) WithContext(ctx context.Context) *ParametersDataParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the parameters data params
func (o *ParametersDataParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the parameters data params
func (o *ParametersDataParams) WithHTTPClient(client *http.Client) *ParametersDataParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the parameters data params
func (o *ParametersDataParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the parameters data params
func (o *ParametersDataParams) WithBody(body *models.ParametersDataReq) *ParametersDataParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the parameters data params
func (o *ParametersDataParams) SetBody(body *models.ParametersDataReq) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *ParametersDataParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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