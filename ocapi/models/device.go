// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// Device device
// swagger:model device
type Device struct {

	// address
	Address int32 `json:"address",omitempty"`

	// allow packet read
	AllowPacketRead int32 `json:"allow_packet_read,omitempty"`

	// configuration period
	ConfigurationPeriod int32 `json:"configuration_period,omitempty"`

	// data fetcher id
	DataFetcherID int32 `json:"data_fetcher_id,omitempty"`

	// device type id
	DeviceTypeID int32 `json:"device_type_id,omitempty"`

	// device type name
	DeviceTypeName string `json:"device_type_name",omitempty"`

	// device type protocol
	DeviceTypeProtocol string `json:"device_type_protocol,omitempty"`

	// first dt
	FirstDt int64 `json:"first_dt,omitempty"`

	// id
	// Required: true
	ID *int32 `json:"id"`

	// identifier
	Identifier string `json:"identifier,omitempty"`

	// last configuration dt
	LastConfigurationDt string `json:"lastConfiguration_dt,omitempty"`

	// last managable dt
	LastManagableDt string `json:"lastManagable_dt,omitempty"`

	// last operative dt
	LastOperativeDt string `json:"lastOperative_dt,omitempty"`

	// last dt
	LastDt string `json:"last_dt,omitempty"`

	// manageable period
	ManageablePeriod int32 `json:"manageable_period,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// offline period
	OfflinePeriod int32 `json:"offline_period,omitempty"`

	// operative period
	OperativePeriod int32 `json:"operative_period,omitempty"`

	// overall timeout
	OverallTimeout uint16 `json:"overall_timeout,omitempty"`

	// parameter categories
	ParameterCategories []*ParamCategory `json:"parameter_categories"`

	// parameters
	Parameters []*DeviceParam `json:"parameters"`

	// password
	Password string `json:"password,omitempty"`

	// protocol
	Protocol string `json:"protocol,omitempty"`

	// serial rts
	SerialRts int32 `json:"serial_rts,omitempty"`

	// serial setup
	SerialSetup string `json:"serial_setup,omitempty"`

	// serial speed
	SerialSpeed int32 `json:"serial_speed,omitempty"`

	// symbol timeout
	SymbolTimeout uint16 `json:"symbol_timeout,omitempty"`

	// time zone
	TimeZone string `json:"time_zone",omitempty"`
}

// Validate validates this device
func (m *Device) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateID(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateParameterCategories(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateParameters(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Device) validateID(formats strfmt.Registry) error {

	if err := validate.Required("id", "body", m.ID); err != nil {
		return err
	}

	return nil
}

func (m *Device) validateParameterCategories(formats strfmt.Registry) error {

	if swag.IsZero(m.ParameterCategories) { // not required
		return nil
	}

	for i := 0; i < len(m.ParameterCategories); i++ {
		if swag.IsZero(m.ParameterCategories[i]) { // not required
			continue
		}

		if m.ParameterCategories[i] != nil {
			if err := m.ParameterCategories[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("parameter_categories" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *Device) validateParameters(formats strfmt.Registry) error {

	if swag.IsZero(m.Parameters) { // not required
		return nil
	}

	for i := 0; i < len(m.Parameters); i++ {
		if swag.IsZero(m.Parameters[i]) { // not required
			continue
		}

		if m.Parameters[i] != nil {
			if err := m.Parameters[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("parameters" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *Device) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Device) UnmarshalBinary(b []byte) error {
	var res Device
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}