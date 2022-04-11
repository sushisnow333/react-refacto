import React from 'react';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {

  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      countries: [],
      classifications: [],
      subClassifications: []
    }
  }


  componentDidMount() {
      
    const state:State = this.computeState(this.props, this.state)


    this.setState({
      ...state,
      classifications: state.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
    this.forceUpdate()
    
  }

  render() {
    const {countries, classifications, subClassifications} = this.state || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

    return (<>
      <select name="countries" multiple>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select name="classifications" multiple>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }

  private computeState(domain: Props, state: State) : State {
    for(let i = 0; i < domain.domains.length; i++) {
      if (state.countries.indexOf(domain.domains[i].substring(0,2)) <= 0) {
        state.countries.push(domain.domains[i].substring(0,2))
      }
      state.classifications.push(domain.domains[i].substring(3,5));
      let flag = false;
      for(let j = 0; j < state.subClassifications.length; j++) {
        if (state.subClassifications[j] === domain.domains[i].substring(6)) {
          flag = true
          break;
        }
      }
      if (!flag) {
        state.subClassifications.push(domain.domains[i].substring(6));
      }
    }
    return state
  }

}

export default DomainFilter
