import React from 'react';

export const SoftwareList = ({softwareList}) => (
  <div>
    <ul>
      {softwareList.map((software, index) => (
          <li style={{listStyleType: 'decimal'}} key={index}>{software.name} - {software.version}</li>
      ))}
    </ul>
  </div>
)
