import Layout from "@/components/layout/Layout";
import HomePage from "@/sections/homePage";
import { gql } from "@apollo/client";
import * as React from "react";

import { client } from "../lib/apollo";

export default function Home({ films }: any) {
  return (
    <Layout>
      <HomePage films={films} />
    </Layout>
  );
}

export async function getStaticProps() {
  const GET_FILMS = gql`
    query ExampleQuery {
      allFilms {
        edges {
          node {
            title
            director
            openingCrawl
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: GET_FILMS,
  });

  return {
    props: {
      films: data.allFilms.edges,
    },
    revalidate: 1,
  };
}
