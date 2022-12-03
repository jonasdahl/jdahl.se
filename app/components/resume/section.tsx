import { Box, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import type { DateTime } from "luxon";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "remix-i18next";

export function Section({ children }: { children: ReactNode }) {
  return <Stack spacing={6}>{children}</Stack>;
}

export function SectionContent({ children }: { children: ReactNode }) {
  return <Stack spacing={8}>{children}</Stack>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Heading as="h2" size="md">
      {children}
    </Heading>
  );
}

export function SectionItem({
  title,
  location,
  description,
  start,
  end,
}: {
  title: string;
  location?: string;
  description?: ReactNode;
  start: DateTime;
  end: DateTime | null;
}) {
  const dateFormat = "LLLL yyyy";
  const locale = useLocale();
  const { t } = useTranslation("resume");

  return (
    <Box>
      <Wrap>
        <WrapItem>
          <Stack spacing={0}>
            <Heading as="h3" size="sm">
              {title}
            </Heading>
            {location ? (
              <Box fontSize="sm" fontWeight="semibold">
                {location}
              </Box>
            ) : null}
          </Stack>
        </WrapItem>
        <WrapItem flexGrow={1} />
        <WrapItem fontWeight="bold" fontSize="sm">
          {start.toFormat(dateFormat, { locale })} -{" "}
          {end ? end.toFormat(dateFormat, { locale }) : t("now")}
        </WrapItem>
      </Wrap>
      {description ? <Box>{description}</Box> : null}
    </Box>
  );
}
