import { createFileRoute } from '@tanstack/react-router';
import FoodspringProject from '@/docs/projects/foodspring.mdx';

import FoodspringBookCover from '@/assets/book_foodspring_front_cover.webp';
import { Page } from '@/components/Page';

export const Route = createFileRoute('/_books/projects/foodspring')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Page variant="cover">
        <img
          src={FoodspringBookCover}
          alt="식봄 프로젝트 정면 표지"
          aria-label="식봄 프로젝트 정면 표지"
        />
      </Page>
      <FoodspringProject
        components={{
          h1: (props) => (
            <h1 className="text-6xl pb-2 text-center" {...props} />
          ),
          h2: (props) => <h2 className="text-5xl pb-2" {...props} />,
          h3: (props) => <h3 className="text-4xl pb-2" {...props} />,
          h4: (props) => <h4 className="text-3xl pb-1" {...props} />,
          h5: (props) => <h5 className="text-2xl pb-1" {...props} />,
          h6: (props) => <h6 className="text-xl pb-1" {...props} />,
          p: (props) => <p className="" {...props} />,
        }}
      />
    </>
  );
}
