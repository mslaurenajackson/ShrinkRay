const Links = () => {
    return (
      <div>
        {linkItems && linkItems.length > 0 ? (
          <ul>
            {linkItems.map((link) => (
              <li key={link.id}>
                <a href={link.link_short_url}>Short URL for {link.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Links did not load...</p>
        )}
      </div>
    );
  };
  
  export default Links;
  