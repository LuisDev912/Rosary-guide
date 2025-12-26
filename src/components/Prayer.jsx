/**
Prayer Component
This component displays a single prayer from the Rosary.
It requires a "title" (string) and "text" (string) passed as props.

Responsibilities:
- Render the prayer title with proper semantic tags.
- Render the full prayer text, supporting multi-line content.
- Serve as a reusable building block for the prayer list.

Notes:
- Useful for rendering prayers individually or inside a collection.
- Styling will later ensure readability and accessibility.
*/

function Prayer({ title, text }) {
    if (!title || !text) return null;

    return (
        <section>
            <h3 className="heading-secondary">{title}</h3>

            {/* supports line breaks */}
            {text.split("\n").map((line, idx) => (
                <p 
                    key={idx} 
                    style={{textAlign: 'center'}}
                    className="italic"
                >
                    {line}
                </p>
            ))}
        </section>
    );
}

export default Prayer;