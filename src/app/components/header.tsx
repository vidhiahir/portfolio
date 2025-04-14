import { Button, Flex, Heading, Text } from "@/once-ui/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/app/resources";

export default function Header() {
  const pathname = usePathname();

  const navLinks = Object.entries(routes)
    .filter(([route, enabled]) => enabled && route !== "/")
    .map(([route]) => ({
      label: route.slice(1).charAt(0).toUpperCase() + route.slice(2),
      href: route,
    }));

  return (
    <Flex
      as="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--background-weak)",
        borderBottom: "1px solid var(--border-weak)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--spacing-l)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Heading variant="display-strong-l">Vidhi Ahir</Heading>
      </Link>
      <Flex
        style={{
          display: "flex",
          gap: "var(--spacing-l)",
          alignItems: "center",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            style={{
              textDecoration: "none",
              color: pathname === href ? "var(--brand-solid-weak)" : "inherit",
              padding: "var(--spacing-s)",
            }}
          >
            <Text variant="body-default-s">{label}</Text>
          </Link>
        ))}
        <Button
          variant="primary"
          onClick={() => {
            window.open("https://github.com/vidhiahir", "_blank");
          }}
        >
          GitHub
        </Button>
      </Flex>
    </Flex>
  );
}
