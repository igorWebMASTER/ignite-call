import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { ArrowRight } from "phosphor-react";
import { Container, Header } from "../styles";
import { ConnectBox, ConnectItem } from "./styles";

export default function Register() {
  const session = useSession();
  // async function handleRegister(data) {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => signIn("google")}
            >
              Conectar
              <ArrowRight />
            </Button>
          </ConnectItem>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Header>
    </Container>
  );
}
