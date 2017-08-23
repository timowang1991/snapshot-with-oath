import React from 'react';
import { render } from 'enzyme';
import enzymeSerializer from 'enzyme-to-json/serializer';

expect.addSnapshotSerializer(enzymeSerializer);

it('should render react div DOM', () => {
    const div = render(
        <div className="div-class">
            <span className="span-class">
                I love Oath
            </span>
        </div>
    );

    expect(div).toMatchSnapshot();
});