// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// ParametersDataReq parameters data req
//
// swagger:model parametersDataReq
type ParametersDataReq struct {

	// end
	End string `json:"end,omitempty"`

	// ids
	Ids []int64 `json:"ids"`

	// start
	Start string `json:"start,omitempty"`

	// step
	Step int64 `json:"step,omitempty"`
}

// Validate validates this parameters data req
func (m *ParametersDataReq) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this parameters data req based on context it is used
func (m *ParametersDataReq) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *ParametersDataReq) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ParametersDataReq) UnmarshalBinary(b []byte) error {
	var res ParametersDataReq
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
