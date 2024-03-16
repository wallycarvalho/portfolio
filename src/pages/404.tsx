import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'gatsby';

export default function NotFoundPage(): ReactNode {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in
            {' '}
            <code>src/pages/</code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>
        .
      </p>
    </main>
  );
}

export const Head: FunctionComponent = function NotFoundHead() {
  return <title>Not found. Please go back</title>;
};
