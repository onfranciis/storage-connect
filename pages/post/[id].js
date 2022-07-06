import { DATA } from "../../components/dynamicPost/MiniDetailsData";
import SubIndex from "../../components/dynamicPost/SubIndex";
export function getStaticPaths() {
  const paths = DATA.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const data = DATA[id - 1];

  return {
    props: { post: data },
  };
}

export default function Post({ post }) {
  return <SubIndex Data={post} />;
}
