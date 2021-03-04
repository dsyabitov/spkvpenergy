// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// DeviceIndexItem device index item
// swagger:model deviceIndexItem
type DeviceIndexItem struct {

	// categories
	Categories []int64 `json:"categories"`

	// has alarm
	HasAlarm bool `json:"has_alarm,omitempty"`

	// has unread
	HasUnread bool `json:"has_unread,omitempty"`

	// id
	ID int64 `json:"id,omitempty"`

	// identifier
	Identifier string `json:"identifier,omitempty"`

	// is favourite
	IsFavourite bool `json:"is_favourite,omitempty"`

	// is online
	IsOnline bool `json:"is_online,omitempty"`

	// last configuration dt
	LastConfigurationDt string `json:"lastConfiguration_dt,omitempty"`

	// last manageable dt
	LastManageableDt string `json:"lastManageable_dt,omitempty"`

	// last operative dt
	LastOperativeDt string `json:"lastOperative_dt,omitempty"`

	// last dt
	LastDt string `json:"last_dt,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// status
	Status string `json:"status,omitempty"`

	// time zone
	TimeZone string `json:"time_zone,omitempty"`

	// type
	Type string `json:"type,omitempty"`
}

// Validate validates this device index item
func (m *DeviceIndexItem) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *DeviceIndexItem) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *DeviceIndexItem) UnmarshalBinary(b []byte) error {
	var res DeviceIndexItem
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
