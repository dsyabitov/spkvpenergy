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
	"github.com/go-openapi/swag"

	"spkvpenergy/ocapi/models"
)

// NewEventLogBackwardParams creates a new EventLogBackwardParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewEventLogBackwardParams() *EventLogBackwardParams {
	return &EventLogBackwardParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewEventLogBackwardParamsWithTimeout creates a new EventLogBackwardParams object
// with the ability to set a timeout on a request.
func NewEventLogBackwardParamsWithTimeout(timeout time.Duration) *EventLogBackwardParams {
	return &EventLogBackwardParams{
		timeout: timeout,
	}
}

// NewEventLogBackwardParamsWithContext creates a new EventLogBackwardParams object
// with the ability to set a context for a request.
func NewEventLogBackwardParamsWithContext(ctx context.Context) *EventLogBackwardParams {
	return &EventLogBackwardParams{
		Context: ctx,
	}
}

// NewEventLogBackwardParamsWithHTTPClient creates a new EventLogBackwardParams object
// with the ability to set a custom HTTPClient for a request.
func NewEventLogBackwardParamsWithHTTPClient(client *http.Client) *EventLogBackwardParams {
	return &EventLogBackwardParams{
		HTTPClient: client,
	}
}

/* EventLogBackwardParams contains all the parameters to send to the API endpoint
   for the event log backward operation.

   Typically these are written to a http.Request.
*/
type EventLogBackwardParams struct {

	// Body.
	Body *models.EventLogBackwardReq

	/* ID.

	   DeviceID for fetch

	   Format: int32
	*/
	ID int32

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the event log backward params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *EventLogBackwardParams) WithDefaults() *EventLogBackwardParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the event log backward params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *EventLogBackwardParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the event log backward params
func (o *EventLogBackwardParams) WithTimeout(timeout time.Duration) *EventLogBackwardParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the event log backward params
func (o *EventLogBackwardParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the event log backward params
func (o *EventLogBackwardParams) WithContext(ctx context.Context) *EventLogBackwardParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the event log backward params
func (o *EventLogBackwardParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the event log backward params
func (o *EventLogBackwardParams) WithHTTPClient(client *http.Client) *EventLogBackwardParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the event log backward params
func (o *EventLogBackwardParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the event log backward params
func (o *EventLogBackwardParams) WithBody(body *models.EventLogBackwardReq) *EventLogBackwardParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the event log backward params
func (o *EventLogBackwardParams) SetBody(body *models.EventLogBackwardReq) {
	o.Body = body
}

// WithID adds the id to the event log backward params
func (o *EventLogBackwardParams) WithID(id int32) *EventLogBackwardParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the event log backward params
func (o *EventLogBackwardParams) SetID(id int32) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *EventLogBackwardParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param id
	if err := r.SetPathParam("id", swag.FormatInt32(o.ID)); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
