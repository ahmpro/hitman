import React from 'react';
import ImageTagItem from '../ImageTagItem/ImageTagItem';

class ImageTagList extends React.Component {

    static get propTypes() {
        return {
            deleteTag: React.PropTypes.func,
            path: React.PropTypes.string,
            isError: React.PropTypes.bool,
            isLoading: React.PropTypes.bool,
            image: React.PropTypes.shape({
                children: React.PropTypes.arrayOf(React.PropTypes.shape({
                    path: React.PropTypes.string,
                    name: React.PropTypes.string,
                    tags: React.PropTypes.arrayOf(React.PropTypes.string)
                }))
            })
        };
    }

    render() {
        if (this.props.isError) {
            return (
                <h2>Error :(</h2>
            );
        }

        if (this.props.isLoading) {
            return (
                <h2>Loading...</h2>
            );
        }

        if (!this.props.image) {
            return (
                <h2>Please select image</h2>
            );
        }

        if (this.props.image.children.length === 0) {
            return (
                <div>
                    <h2>Repository is empty</h2>
                    <p>
                        This repository can be safely deleted from registry.<br />
                        This action depends on storage driver type.
                        In most cases, this can be done by deleting:
                    </p>
                    <pre>%registry_root%/registry/v2/repositories/{this.props.path}</pre>
                </div>
            );
        }

        return (
            <div>
                {this.props.image.children.map(tagItem => {
                    return (
                        <ImageTagItem key={tagItem.name}
                                      name={tagItem.name}
                                      path={tagItem.path}
                                      tags={tagItem.tags}
                                      deleteTag={this.props.deleteTag} />
                    );
                })}
            </div>
        );
    }

}

export default ImageTagList;
