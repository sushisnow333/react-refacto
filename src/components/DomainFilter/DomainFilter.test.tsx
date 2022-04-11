
import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })

    it('should country be the first character if domain = 0', () => {
      const wrapper = shallow(<DomainFilter domains={['']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('')
      expect(wrapper.find("select").at(0).children().text()).toEqual('')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('')
      expect(wrapper.find("select").at(1).children().text()).toEqual('')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })
    
    it('should country be the first character if domain = 1', () => {
      const wrapper = shallow(<DomainFilter domains={['U']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('U')
      expect(wrapper.find("select").at(0).children().text()).toEqual('U')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('')
      expect(wrapper.find("select").at(1).children().text()).toEqual('')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })

    it('should country be the 2 first characters if domain.length = 2', () => {
      const wrapper = shallow(<DomainFilter domains={['US']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('')
      expect(wrapper.find("select").at(1).children().text()).toEqual('')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })
    
    it('should country be the 2 first characters if domain.length = 3', () => {
      const wrapper = shallow(<DomainFilter domains={['US1']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('')
      expect(wrapper.find("select").at(1).children().text()).toEqual('')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })


    
    it('should country be 2 characters and classification the first character if domain.length = 4', () => {
      const wrapper = shallow(<DomainFilter domains={['USAB']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('B')
      expect(wrapper.find("select").at(1).children().text()).toEqual('B')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })

    it('should country be 2 characters and classification 2 characters if domain.length = 5', () => {
      const wrapper = shallow(<DomainFilter domains={['USABC']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })

    it('should country be 2 characters and classification 2 characters if domain.length = 6', () => {
      const wrapper = shallow(<DomainFilter domains={['USABCd']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('')
      expect(wrapper.find("select").at(2).children().text()).toEqual('')
    })

    it('should country be 2 characters, classification 2 characters and subClassifications 1 character if domain.length = 7', () => {
      const wrapper = shallow(<DomainFilter domains={['USABCdé']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('é')
      expect(wrapper.find("select").at(2).children().text()).toEqual('é')
    })

    it('should country be 2 characters, classification 2 characters and subClassifications 2 characters if domain.length = 8', () => {
      const wrapper = shallow(<DomainFilter domains={['USABCdéf']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('éf')
      expect(wrapper.find("select").at(2).children().text()).toEqual('éf')
    })

    it('should country be 2 characters, classification 2 characters and subClassifications 3 characters if domain.length = 9', () => {
      const wrapper = shallow(<DomainFilter domains={['USABCdéfg']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('éfg')
      expect(wrapper.find("select").at(2).children().text()).toEqual('éfg')
    })

    
    it('should country be 2 characters, classification 2 characters and subClassifications 10 character if domain.length = 16', () => {
      const wrapper = shallow(<DomainFilter domains={['USABCdéfghijklmn']} />);

      expect(wrapper.find("select").at(0).children().props().value).toEqual('US')
      expect(wrapper.find("select").at(0).children().text()).toEqual('US')
      expect(wrapper.find("select").at(1).children().props().value).toEqual('BC')
      expect(wrapper.find("select").at(1).children().text()).toEqual('BC')
      expect(wrapper.find("select").at(2).children().props().value).toEqual('éfghijklmn')
      expect(wrapper.find("select").at(2).children().text()).toEqual('éfghijklmn')
    })
  })
})
