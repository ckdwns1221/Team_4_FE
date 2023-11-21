import React from 'react';

const MainSection = () => {
    const folders = new Array(8).fill(0);
    
    return (
        <section>
            <div className="folders">
                {folders.map((_, index) => (
                    <div className="folder" key={index}>
                        Folder {index + 1}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainSection;