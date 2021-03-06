// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"spkvpenergy/ocapi/models"
)

// EventListByDeviceReader is a Reader for the EventListByDevice structure.
type EventListByDeviceReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *EventListByDeviceReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewEventListByDeviceOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	default:
		result := NewEventListByDeviceDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewEventListByDeviceOK creates a EventListByDeviceOK with default headers values
func NewEventListByDeviceOK() *EventListByDeviceOK {
	return &EventListByDeviceOK{}
}

/* EventListByDeviceOK describes a response with status code 200, with default header values.

events response
*/
type EventListByDeviceOK struct {
	Payload []*models.DeviceEvent
}

func (o *EventListByDeviceOK) Error() string {
	return fmt.Sprintf("[POST /event/list-by-device][%d] eventListByDeviceOK  %+v", 200, o.Payload)
}
func (o *EventListByDeviceOK) GetPayload() []*models.DeviceEvent {
	return o.Payload
}

func (o *EventListByDeviceOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewEventListByDeviceDefault creates a EventListByDeviceDefault with default headers values
func NewEventListByDeviceDefault(code int) *EventListByDeviceDefault {
	return &EventListByDeviceDefault{
		_statusCode: code,
	}
}

/* EventListByDeviceDefault describes a response with status code -1, with default header values.

unexpected error
*/
type EventListByDeviceDefault struct {
	_statusCode int

	Payload *models.ErrorModel
}

// Code gets the status code for the event list by device default response
func (o *EventListByDeviceDefault) Code() int {
	return o._statusCode
}

func (o *EventListByDeviceDefault) Error() string {
	return fmt.Sprintf("[POST /event/list-by-device][%d] eventListByDevice default  %+v", o._statusCode, o.Payload)
}
func (o *EventListByDeviceDefault) GetPayload() *models.ErrorModel {
	return o.Payload
}

func (o *EventListByDeviceDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ErrorModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
