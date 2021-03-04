// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// GetCompanyEventsReq get company events req
// swagger:model getCompanyEventsReq
type GetCompanyEventsReq struct {

	// is active
	IsActive int64 `json:"is_active,omitempty"`

	// is critical
	IsCritical int64 `json:"is_critical,omitempty"`

	// status
	Status int64 `json:"status,omitempty"`
}

// Validate validates this get company events req
func (m *GetCompanyEventsReq) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *GetCompanyEventsReq) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *GetCompanyEventsReq) UnmarshalBinary(b []byte) error {
	var res GetCompanyEventsReq
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}