/* import React from 'react';
import { getStaticInformation } from "../../../utils/getStaticInformation";
function withData(term) {
    return function(WrappedComponent) {
      export const getStaticProps = async (context) => {
        const { params } = context;
        const pokemonTermSearch = params[term];
        const data = await getStaticInformation(pokemonTermSearch);
        return data;
      };
  
    }
}
export default withData; */
/////////////////////Segun chat////////////////////////////////////////////
import React from "react";
import { getStaticInformation } from "../../utils/getStaticInformation";
import { GetStaticProps } from "next";

type Props = {
  term: string;
};

type Data = {
  props: any;
};

function withData(term: string) {
  return function <P extends Props>(WrappedComponent: React.ComponentType<P>): React.FC<P> {
    const getStaticProps = async (context: any): Promise<Data> => {
      const { params } = context;
      const pokemonTermSearch = params[term];
      const data = await getStaticInformation(pokemonTermSearch);
      return { props: data };
    };

    const WithData: React.FC<P> = (props: P) => <WrappedComponent {...props} />;

    WithData.getStaticProps = getStaticProps;

    return WithData;
  };
}

export default withData;
