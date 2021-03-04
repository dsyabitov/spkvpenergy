// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// AuthResp auth resp
// swagger:model authResp
type AuthResp struct {

	// name
	Name string `json:"name,omitempty"`

	// token
	Token string `json:"token,omitempty"`
}

// Validate validates this auth resp
func (m *AuthResp) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *AuthResp) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *AuthResp) UnmarshalBinary(b []byte) error {
	var res AuthResp
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
