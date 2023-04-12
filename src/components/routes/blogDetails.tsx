import { useBlogQuery } from "app/hooks";
import { ReactQueryWrapper } from "components/lib";
import { BlogDetails } from "components/sections";
import { useParams } from "react-router-dom";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const blogQuery = useBlogQuery(slug || "");

  return (
    <ReactQueryWrapper queryResult={blogQuery}>
      <BlogDetails blog={blogQuery.data!} />
    </ReactQueryWrapper>
  );
}
