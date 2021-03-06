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

// DeviceTypesInfoReader is a Reader for the DeviceTypesInfo structure.
type DeviceTypesInfoReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeviceTypesInfoReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeviceTypesInfoOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	default:
		result := NewDeviceTypesInfoDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeviceTypesInfoOK creates a DeviceTypesInfoOK with default headers values
func NewDeviceTypesInfoOK() *DeviceTypesInfoOK {
	return &DeviceTypesInfoOK{}
}

/* DeviceTypesInfoOK describes a response with status code 200, with default header values.

device types response
*/
type DeviceTypesInfoOK struct {
	Payload models.DeviceTypesResponse
}

func (o *DeviceTypesInfoOK) Error() string {
	return fmt.Sprintf("[POST /device-management/types-info][%d] deviceTypesInfoOK  %+v", 200, o.Payload)
}
func (o *DeviceTypesInfoOK) GetPayload() models.DeviceTypesResponse {
	return o.Payload
}

func (o *DeviceTypesInfoOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeviceTypesInfoDefault creates a DeviceTypesInfoDefault with default headers values
func NewDeviceTypesInfoDefault(code int) *DeviceTypesInfoDefault {
	return &DeviceTypesInfoDefault{
		_statusCode: code,
	}
}

/* DeviceTypesInfoDefault describes a response with status code -1, with default header values.

unexpected error
*/
type DeviceTypesInfoDefault struct {
	_statusCode int

	Payload *models.ErrorModel
}

// Code gets the status code for the device types info default response
func (o *DeviceTypesInfoDefault) Code() int {
	return o._statusCode
}

func (o *DeviceTypesInfoDefault) Error() string {
	return fmt.Sprintf("[POST /device-management/types-info][%d] deviceTypesInfo default  %+v", o._statusCode, o.Payload)
}
func (o *DeviceTypesInfoDefault) GetPayload() *models.ErrorModel {
	return o.Payload
}

func (o *DeviceTypesInfoDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ErrorModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
