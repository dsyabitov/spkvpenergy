// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "spkvpenergy/ocapi/models"
)

// ParametersDataReader is a Reader for the ParametersData structure.
type ParametersDataReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ParametersDataReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewParametersDataOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	default:
		result := NewParametersDataDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewParametersDataOK creates a ParametersDataOK with default headers values
func NewParametersDataOK() *ParametersDataOK {
	return &ParametersDataOK{}
}

/*ParametersDataOK handles this case with default header values.

parameters/data response
*/
type ParametersDataOK struct {
	Payload models.ParametersDataResp
}

func (o *ParametersDataOK) Error() string {
	return fmt.Sprintf("[POST /parameters/data][%d] parametersDataOK  %+v", 200, o.Payload)
}

func (o *ParametersDataOK) GetPayload() models.ParametersDataResp {
	return o.Payload
}

func (o *ParametersDataOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewParametersDataDefault creates a ParametersDataDefault with default headers values
func NewParametersDataDefault(code int) *ParametersDataDefault {
	return &ParametersDataDefault{
		_statusCode: code,
	}
}

/*ParametersDataDefault handles this case with default header values.

unexpected error
*/
type ParametersDataDefault struct {
	_statusCode int

	Payload *models.ErrorModel
}

// Code gets the status code for the parameters data default response
func (o *ParametersDataDefault) Code() int {
	return o._statusCode
}

func (o *ParametersDataDefault) Error() string {
	return fmt.Sprintf("[POST /parameters/data][%d] parametersData default  %+v", o._statusCode, o.Payload)
}

func (o *ParametersDataDefault) GetPayload() *models.ErrorModel {
	return o.Payload
}

func (o *ParametersDataDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ErrorModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
