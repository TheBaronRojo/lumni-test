import IContactInfoDto from "@application/models/IContactInfoDto";
import IIdentificationInfoDto from "@application/models/IIdentificationInfoDto";
import InfoSection from "@view/common/InfoSection";
import React, { CSSProperties } from "react";



export interface IContactInfoDetailProps {
  contactInfo: IContactInfoDto;
  identificationInfo: IIdentificationInfoDto;
  style?: CSSProperties;
}

function ContactInfoDetail(props: IContactInfoDetailProps) {
  return (
    <div style={props.style}>
      <InfoSection label="Nombre completo">
        {props.identificationInfo.firstName} {props.identificationInfo.middleName} {props.identificationInfo.lastName}
      </InfoSection>

      <InfoSection label="Correo">
        {props.contactInfo.email}
      </InfoSection>

      <InfoSection label="Teléfono">
        {props.contactInfo.cellphoneNumber}
      </InfoSection>
    </div>
  );
}

export default ContactInfoDetail;