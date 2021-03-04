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

// NewEventListByDeviceParams creates a new EventListByDeviceParams object
// with the default values initialized.
func NewEventListByDeviceParams() *EventListByDeviceParams {
	var ()
	return &EventListByDeviceParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewEventListByDeviceParamsWithTimeout creates a new EventListByDeviceParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewEventListByDeviceParamsWithTimeout(timeout time.Duration) *EventListByDeviceParams {
	var ()
	return &EventListByDeviceParams{

		timeout: timeout,
	}
}

// NewEventListByDeviceParamsWithContext creates a new EventListByDeviceParams object
// with the default values initialized, and the ability to set a context for a request
func NewEventListByDeviceParamsWithContext(ctx context.Context) *EventListByDeviceParams {
	var ()
	return &EventListByDeviceParams{

		Context: ctx,
	}
}

// NewEventListByDeviceParamsWithHTTPClient creates a new EventListByDeviceParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewEventListByDeviceParamsWithHTTPClient(client *http.Client) *EventListByDeviceParams {
	var ()
	return &EventListByDeviceParams{
		HTTPClient: client,
	}
}

/*EventListByDeviceParams contains all the parameters to send to the API endpoint
for the event list by device operation typically these are written to a http.Request
*/
type EventListByDeviceParams struct {

	/*Body
	  Parameters

	*/
	Body *models.EventsListByDeviceReq

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the event list by device params
func (o *EventListByDeviceParams) WithTimeout(timeout time.Duration) *EventListByDeviceParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the event list by device params
func (o *EventListByDeviceParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the event list by device params
func (o *EventListByDeviceParams) WithContext(ctx context.Context) *EventListByDeviceParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the event list by device params
func (o *EventListByDeviceParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the event list by device params
func (o *EventListByDeviceParams) WithHTTPClient(client *http.Client) *EventListByDeviceParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the event list by device params
func (o *EventListByDeviceParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the event list by device params
func (o *EventListByDeviceParams) WithBody(body *models.EventsListByDeviceReq) *EventListByDeviceParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the event list by device params
func (o *EventListByDeviceParams) SetBody(body *models.EventsListByDeviceReq) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *EventListByDeviceParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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
