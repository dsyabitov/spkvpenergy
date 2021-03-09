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

// NewGetLastParametersDataParams creates a new GetLastParametersDataParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewGetLastParametersDataParams() *GetLastParametersDataParams {
	return &GetLastParametersDataParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewGetLastParametersDataParamsWithTimeout creates a new GetLastParametersDataParams object
// with the ability to set a timeout on a request.
func NewGetLastParametersDataParamsWithTimeout(timeout time.Duration) *GetLastParametersDataParams {
	return &GetLastParametersDataParams{
		timeout: timeout,
	}
}

// NewGetLastParametersDataParamsWithContext creates a new GetLastParametersDataParams object
// with the ability to set a context for a request.
func NewGetLastParametersDataParamsWithContext(ctx context.Context) *GetLastParametersDataParams {
	return &GetLastParametersDataParams{
		Context: ctx,
	}
}

// NewGetLastParametersDataParamsWithHTTPClient creates a new GetLastParametersDataParams object
// with the ability to set a custom HTTPClient for a request.
func NewGetLastParametersDataParamsWithHTTPClient(client *http.Client) *GetLastParametersDataParams {
	return &GetLastParametersDataParams{
		HTTPClient: client,
	}
}

/* GetLastParametersDataParams contains all the parameters to send to the API endpoint
   for the get last parameters data operation.

   Typically these are written to a http.Request.
*/
type GetLastParametersDataParams struct {

	// Body.
	Body *models.IDList

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the get last parameters data params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetLastParametersDataParams) WithDefaults() *GetLastParametersDataParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the get last parameters data params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *GetLastParametersDataParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the get last parameters data params
func (o *GetLastParametersDataParams) WithTimeout(timeout time.Duration) *GetLastParametersDataParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get last parameters data params
func (o *GetLastParametersDataParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get last parameters data params
func (o *GetLastParametersDataParams) WithContext(ctx context.Context) *GetLastParametersDataParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get last parameters data params
func (o *GetLastParametersDataParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get last parameters data params
func (o *GetLastParametersDataParams) WithHTTPClient(client *http.Client) *GetLastParametersDataParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get last parameters data params
func (o *GetLastParametersDataParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the get last parameters data params
func (o *GetLastParametersDataParams) WithBody(body *models.IDList) *GetLastParametersDataParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the get last parameters data params
func (o *GetLastParametersDataParams) SetBody(body *models.IDList) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *GetLastParametersDataParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
