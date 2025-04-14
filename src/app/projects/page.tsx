import { projects } from "@/app/resources/content";
import { baseURL } from "../resources/config.js";

import styles from "@/components/about/about.module.scss"; // reusing same styles
import {
  Column,
  Flex,
  Heading,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";

export async function generateMetadata() {
  const title = "Projects";
  const description = "A collection of my featured development projects.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Projects() {
  return (
    <Column
      style={{
        width: "100%",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <Heading
        className={styles.textAlign}
        variant="display-strong-m"
        marginBottom="xl"
        align="center"
      >
        Highlights
      </Heading>

      <Flex
        wrap
        gap="32"
        justify-content="center"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {projects.content.map((project, index) => (
          // <Column
          //   key={`${project.title}-${index}`}
          //   border="neutral-medium"
          //   radius="xl"
          //   padding="m"
          //   gap="m"
          //   style={{
          //     flex: "1 1 calc(50% - 16px)", // Ensures 2 per row
          //     maxWidth: "400px", // Optional: prevents stretching
          //   }}
          // >

          <Column
            key={`${project.title}-${index}`}
            border="neutral-medium"
            radius="xl"
            padding="m"
            gap="m"
            style={{
              flex: "1 1 calc(50% - 16px)", // 2 items per row with spacing
              maxWidth: "calc(50% - 16px)",
            }}
          >
            {/* Project Image */}
            <SmartImage
              src={project.image}
              alt={project.title}
              radius="m"
              sizes="300"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            {/* Project Title and Subname */}
            <Column gap="s">
              <Text variant="heading-strong-l" className={styles.textAlign}>
                {project.title}
              </Text>
              {project.subname && (
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  className={styles.textAlign}
                >
                  {project.subname}
                </Text>
              )}
            </Column>

            {/* Tech Stack */}
            <Flex wrap gap="8">
              {project.techStack.map((tech, idx) => (
                <Tag key={idx} size="m">
                  {tech}
                </Tag>
              ))}
            </Flex>

            {/* GitHub + Live Link Icons */}
            <Flex gap="12" paddingTop="8">
              {project.github && (
                <IconButton
                  href={project.github}
                  icon="github"
                  variant="secondary"
                />
              )}
              {project.live && (
                <IconButton
                  href={project.live}
                  icon="externalLink"
                  variant="secondary"
                />
              )}
            </Flex>
          </Column>
        ))}
      </Flex>
    </Column>
  );
}
