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

// DeviceIndexReader is a Reader for the DeviceIndex structure.
type DeviceIndexReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeviceIndexReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeviceIndexOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	default:
		result := NewDeviceIndexDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewDeviceIndexOK creates a DeviceIndexOK with default headers values
func NewDeviceIndexOK() *DeviceIndexOK {
	return &DeviceIndexOK{}
}

/* DeviceIndexOK describes a response with status code 200, with default header values.

OK
*/
type DeviceIndexOK struct {
	Payload models.DeviceIndexResponse
}

func (o *DeviceIndexOK) Error() string {
	return fmt.Sprintf("[POST /device/index][%d] deviceIndexOK  %+v", 200, o.Payload)
}
func (o *DeviceIndexOK) GetPayload() models.DeviceIndexResponse {
	return o.Payload
}

func (o *DeviceIndexOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeviceIndexDefault creates a DeviceIndexDefault with default headers values
func NewDeviceIndexDefault(code int) *DeviceIndexDefault {
	return &DeviceIndexDefault{
		_statusCode: code,
	}
}

/* DeviceIndexDefault describes a response with status code -1, with default header values.

unexpected error
*/
type DeviceIndexDefault struct {
	_statusCode int

	Payload *models.ErrorModel
}

// Code gets the status code for the device index default response
func (o *DeviceIndexDefault) Code() int {
	return o._statusCode
}

func (o *DeviceIndexDefault) Error() string {
	return fmt.Sprintf("[POST /device/index][%d] deviceIndex default  %+v", o._statusCode, o.Payload)
}
func (o *DeviceIndexDefault) GetPayload() *models.ErrorModel {
	return o.Payload
}

func (o *DeviceIndexDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ErrorModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
