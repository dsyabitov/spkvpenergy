// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// DeviceParam device param
//
// swagger:model deviceParam
type DeviceParam struct {

	// address
	Address string `json:"address,omitempty"`

	// bitmask enabled
	BitmaskEnabled int32 `json:"bitmask_enabled,omitempty"`

	// bitmask value
	BitmaskValue string `json:"bitmask_value,omitempty"`

	// can configuration
	CanConfiguration int32 `json:"can_configuration,omitempty"`

	// can manageable
	CanManageable int32 `json:"can_manageable,omitempty"`

	// can operative
	CanOperative int32 `json:"can_operative,omitempty"`

	// category id
	CategoryID int32 `json:"category_id,omitempty"`

	// code
	// Required: true
	Code *string `json:"code"`

	// format
	Format int32 `json:"format,omitempty"`

	// function
	Function int32 `json:"function,omitempty"`

	// hash
	Hash string `json:"hash,omitempty"`

	// id
	// Required: true
	ID *int32 `json:"id"`

	// in configuration
	InConfiguration int32 `json:"in_configuration,omitempty"`

	// in events
	InEvents int32 `json:"in_events,omitempty"`

	// in graphs
	InGraphs int32 `json:"in_graphs,omitempty"`

	// in manageable
	InManageable int32 `json:"in_manageable,omitempty"`

	// in operative
	InOperative int32 `json:"in_operative,omitempty"`

	// in parameters
	InParameters int32 `json:"in_parameters,omitempty"`

	// in tables
	InTables int32 `json:"in_tables,omitempty"`

	// index
	Index int32 `json:"index,omitempty"`

	// is writable
	IsWritable int32 `json:"is_writable,omitempty"`

	// length in device
	LengthInDevice int32 `json:"length_in_device,omitempty"`

	// max val
	MaxVal string `json:"max_val,omitempty"`

	// measurement
	Measurement *Measurement `json:"measurement,omitempty"`

	// min val
	MinVal string `json:"min_val,omitempty"`

	// modbus format
	ModbusFormat int32 `json:"modbus_format,omitempty"`

	// name
	// Required: true
	Name *string `json:"name"`

	// precision
	Precision int32 `json:"precision,omitempty"`

	// register byte order
	RegisterByteOrder int32 `json:"register_byte_order,omitempty"`

	// register order
	RegisterOrder int32 `json:"register_order,omitempty"`

	// type
	Type int32 `json:"type,omitempty"`

	// value
	Value string `json:"value,omitempty"`

	// write function
	WriteFunction int32 `json:"write_function,omitempty"`
}

// Validate validates this device param
func (m *DeviceParam) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateCode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateMeasurement(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateName(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DeviceParam) validateCode(formats strfmt.Registry) error {

	if err := validate.Required("code", "body", m.Code); err != nil {
		return err
	}

	return nil
}

func (m *DeviceParam) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *DeviceParam) validateMeasurement(formats strfmt.Registry) error {
	if swag.IsZero(m.Measurement) { // not required
		return nil
	}

	if m.Measurement != nil {
		if err := m.Measurement.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("measurement")
			}
			return err
		}
	}

	return nil
}

func (m *DeviceParam) validateName(formats strfmt.Registry) error {

	if err := validate.Required("name", "body", m.Name); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this device param based on the context it is used
func (m *DeviceParam) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateMeasurement(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *DeviceParam) contextValidateMeasurement(ctx context.Context, formats strfmt.Registry) error {

	if m.Measurement != nil {
		if err := m.Measurement.ContextValidate(ctx, formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("measurement")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *DeviceParam) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DeviceParam) UnmarshalBinary(b []byte) error {
	var res DeviceParam
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
