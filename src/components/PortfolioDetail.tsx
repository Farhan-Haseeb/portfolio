"use client";

import Image from "next/image";
import { Card } from "antd";
import { BookOpen, Code, ExternalLink } from "react-feather";

import "@/styles/portfolio.scss";
import type { ReactNode } from "react";

import { IPortfilioItem } from "@/types/portfolio";
import { launchExternalUrl } from "@/utils";

const { Meta } = Card;

export default function PortfolioDetail({ item }: { item: IPortfilioItem }) {
  const actions: ReactNode[] = [];
  const centerItem = (item: ReactNode) => (
    <div className="flex justify-center">{item}</div>
  );

  if (item.url) {
    actions.push(
      centerItem(
        <ExternalLink key="home" onClick={() => launchExternalUrl(item.url)} />,
      ),
    );
  }
  if (item.source) {
    actions.push(
      centerItem(
        <Code
          key="source-code"
          onClick={() => launchExternalUrl(item.source)}
        />,
      ),
    );
  }
  if (item.caseStudy) {
    actions.push(centerItem(<BookOpen key="case-study" />));
  }

  return (
    <>
      <Card
        className="w-full font-mono"
        cover={
          <div className="h-48 w-72 p-2 flex justify-center items-center content-center">
            <Image
              width={200}
              height={100}
              alt={`${item.name}'s logo`}
              src={`/assets/logos/${item.logo}.webp`}
              loading="lazy"
              priority={false}
              placeholder="blur"
              blurDataURL={`/assets/loading.webp`}
              className="logo object-fill m-auto"
            />
          </div>
        }
        actions={actions}
      >
        <Meta
          title={item.name}
          description={<p className="font-inconsolata">{item.description}</p>}
        />
      </Card>
    </>
  );
}
