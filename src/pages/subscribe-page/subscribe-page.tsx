import React, { FC, useState } from 'react';
import { Button, Input, Select, Switch, Table } from 'antd';

interface Person {
  id: number;
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  email: string;
  promo: boolean;
}

const { Option } = Select;

const MyComponent: FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState(false);
  const [people, setPeople] = useState<Person[]>([]);

  const handleSubmit = () => {
    if (!name || !surname || !birthday || !country || !gender || !email) return;

    const newPerson = {
      id: Date.now(),
      name,
      surname,
      birthday,
      country,
      gender,
      email,
      promo,
    };

    setPeople([...people, newPerson]);
    setName('');
    setSurname('');
    setBirthday('');
    setCountry('');
    setGender('');
    setEmail('');
    setPromo(false);
    localStorage.setItem('people', JSON.stringify([...people, newPerson]));
  };

  const handleClearLocalStorage = () => {
    setPeople([]);
    localStorage.removeItem('people');
  };

  const getPeopleFromLocalStorage = () => {
    const peopleFromLocalStorage = localStorage.getItem('people');
    if (peopleFromLocalStorage) {
      setPeople(JSON.parse(peopleFromLocalStorage));
    }
  };

  React.useEffect(() => {
    getPeopleFromLocalStorage();
  }, []);

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname',
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Promo',
      dataIndex: 'promo',
      key: 'promo',
      render: (promo: boolean) => (promo ? 'Yes' : 'No'),
    },
  ];

  return (
    <div>
      <div>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <Input placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>
      <div>
        <Input
          placeholder="Birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div>
        <Select
          placeholder="Country"
          value={country}
          onChange={(value: string) => setCountry(value)}
        >
          <Option value="USA">USA</Option>
          <Option value="Canada">Canada</Option>
          <Option value="Mexico">Mexico</Option>
        </Select>
      </div>
      <div>
        <Switch
          checkedChildren="Male"
          unCheckedChildren="Female"
          checked={gender === 'male'}
          onChange={(value: boolean) => setGender(value ? 'male' : 'female')}
        />
      </div>
      <div>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <Switch
          checkedChildren="Yes"
          unCheckedChildren="No"
          checked={promo}
          onChange={(value: boolean) => setPromo(value)}
        />
        <span style={{ marginLeft: 10 }}>
          {promo
            ? 'I want to receive notifications about promo'
            : 'I don’t want to receive notifications about promo'}
        </span>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleClearLocalStorage}>Clear Local Storage</Button>
      <Table dataSource={people} columns={columns} />
    </div>
  );
};

export default MyComponent;
