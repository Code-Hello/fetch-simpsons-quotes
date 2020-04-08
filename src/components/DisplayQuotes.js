import React from 'react';

function DisplayQuotes({quoteData}) {
    return (
        <figure>
            <img
                src={quoteData.image}
                alt={quoteData.character} />
            <figcaption>
                <blockquote>{quoteData.quote}</blockquote>
                <p>
                    <cite>{quoteData.character}</cite>
                </p>
            </figcaption>
        </figure>
    );
};

export default DisplayQuotes;