import PageLayout from "./components/PageLayout";
import HeaderDesktop from "./components/HeaderDesktop";
import TicketLink from "./components/TicketLink";

export default function Home() {
  return (
    <PageLayout>
      <HeaderDesktop />
       <TicketLink>Get Tickets</TicketLink>
    </PageLayout>
  );
}
