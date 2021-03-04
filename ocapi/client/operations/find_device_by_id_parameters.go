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
	"github.com/go-openapi/swag"

	strfmt "github.com/go-openapi/strfmt"
)

// NewFindDeviceByIDParams creates a new FindDeviceByIDParams object
// with the default values initialized.
func NewFindDeviceByIDParams() *FindDeviceByIDParams {
	var ()
	return &FindDeviceByIDParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewFindDeviceByIDParamsWithTimeout creates a new FindDeviceByIDParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewFindDeviceByIDParamsWithTimeout(timeout time.Duration) *FindDeviceByIDParams {
	var ()
	return &FindDeviceByIDParams{

		timeout: timeout,
	}
}

// NewFindDeviceByIDParamsWithContext creates a new FindDeviceByIDParams object
// with the default values initialized, and the ability to set a context for a request
func NewFindDeviceByIDParamsWithContext(ctx context.Context) *FindDeviceByIDParams {
	var ()
	return &FindDeviceByIDParams{

		Context: ctx,
	}
}

// NewFindDeviceByIDParamsWithHTTPClient creates a new FindDeviceByIDParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewFindDeviceByIDParamsWithHTTPClient(client *http.Client) *FindDeviceByIDParams {
	var ()
	return &FindDeviceByIDParams{
		HTTPClient: client,
	}
}

/*FindDeviceByIDParams contains all the parameters to send to the API endpoint
for the find device by Id operation typically these are written to a http.Request
*/
type FindDeviceByIDParams struct {

	/*ID
	  DeviceID for fetch

	*/
	ID int32

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the find device by Id params
func (o *FindDeviceByIDParams) WithTimeout(timeout time.Duration) *FindDeviceByIDParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the find device by Id params
func (o *FindDeviceByIDParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the find device by Id params
func (o *FindDeviceByIDParams) WithContext(ctx context.Context) *FindDeviceByIDParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the find device by Id params
func (o *FindDeviceByIDParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the find device by Id params
func (o *FindDeviceByIDParams) WithHTTPClient(client *http.Client) *FindDeviceByIDParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the find device by Id params
func (o *FindDeviceByIDParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the find device by Id params
func (o *FindDeviceByIDParams) WithID(id int32) *FindDeviceByIDParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the find device by Id params
func (o *FindDeviceByIDParams) SetID(id int32) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *FindDeviceByIDParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param id
	if err := r.SetPathParam("id", swag.FormatInt32(o.ID)); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}