// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// DeviceIndexRequest device index request
// swagger:model deviceIndexRequest
type DeviceIndexRequest struct {

	// company id
	CompanyID *int64 `json:"company_id,omitempty"`

	// device ids
	DeviceIds []int64 `json:"device_ids"`

	// filter
	Filter *string `json:"filter,omitempty"`
}

// Validate validates this device index request
func (m *DeviceIndexRequest) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *DeviceIndexRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DeviceIndexRequest) UnmarshalBinary(b []byte) error {
	var res DeviceIndexRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
