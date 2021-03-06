/* @flow */
import { connect } from 'react-redux';
import { toggleFilter, FILTER_POOLS } from 'src/redux/modules/filters';
import Checkbox from 'src/components/forms/Checkbox';
import InputWrapper from 'src/components/styled/InputWrapper';
import React from 'react';

export type Props = {};

export class MapFilters extends React.Component {
  props: Props;

  handleToggle = evt =>
    this.props.toggleFilter(FILTER_POOLS.MAPS, evt.currentTarget.name);

  render() {
    return (
      <div>
        <InputWrapper>
          <Checkbox
            name="hideCheckedMaps"
            checked={!!this.props.hideCheckedMaps}
            onChange={this.handleToggle}
          >
            Hide checked maps
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideUniques"
            checked={!!this.props.hideUniques}
            onChange={this.handleToggle}
          >
            Hide uniques
          </Checkbox>
        </InputWrapper>
        <InputWrapper>
          <Checkbox
            name="hideNonAtlasMaps"
            checked={!!this.props.hideNonAtlasMaps}
            onChange={this.handleToggle}
          >
            Hide non-atlas maps
          </Checkbox>
        </InputWrapper>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.filters.maps,
  }),
  { toggleFilter }
)(MapFilters);
