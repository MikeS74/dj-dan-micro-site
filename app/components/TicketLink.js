'use client'

import styled from 'styled-components';
import { colors } from '../styles/colors';

const TicketLink = styled.div`
  display: inline-flex;
  color: ${colors.lightGrapefruit};
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
`;

export default TicketLink;

// import Image from "next/image";

//  <a
//     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       aria-hidden
//       src="/globe.svg"
//       alt="Globe icon"
//       width={16}
//       height={16}
//     />
//     Go to nextjs.org →
//   </a>