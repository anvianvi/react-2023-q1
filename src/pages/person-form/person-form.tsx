import { Form, Input, Radio, Select, Button, Table } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { Person } from 'interfaces';

const durationOptions = [
  { label: '<1:30', value: 'lessThan1:30' },
  { label: '1:30-2:00', value: '1:30to2:00' },
  { label: '>2:00', value: 'moreThan2:00' },
];
const PersonForm = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [currentId, setCurrentId] = useState(1);

  const { control, handleSubmit, formState } = useForm<Person>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: Person) => {
    const newPerson = { ...data, id: currentId };
    setPersons([...persons, newPerson]);
    setCurrentId(currentId + 1);
    localStorage.setItem('persons', JSON.stringify([...persons, newPerson]));
  };

  const clearLocalStorage = () => {
    setPersons([]);
    setCurrentId(1);
    localStorage.removeItem('persons');
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Surname', dataIndex: 'surname', key: 'surname' },
    { title: 'Birthdate', dataIndex: 'birthdate', key: 'birthdate' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'Duration', dataIndex: 'duration', key: 'duration' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)} data-testid="myform">
        <Form.Item
          label="Name"
          validateStatus={formState.errors.name ? 'error' : ''}
          help={formState.errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Surname"
          validateStatus={formState.errors.surname ? 'error' : ''}
          help={formState.errors.surname?.message}
        >
          <Controller
            name="surname"
            control={control}
            defaultValue=""
            rules={{ required: 'Surname is required' }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Birthdate"
          validateStatus={formState.errors.birthdate ? 'error' : ''}
          help={formState.errors.birthdate?.message}
        >
          <Controller
            name="birthdate"
            control={control}
            defaultValue=""
            rules={{ required: 'Birthdate is required' }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Gender"
          validateStatus={formState.errors.gender ? 'error' : ''}
          help={formState.errors.gender?.message}
        >
          <Controller
            name="gender"
            control={control}
            defaultValue="male"
            rules={{ required: 'Gender is required' }}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            )}
          />
        </Form.Item>
        <Form.Item
          label="Duration"
          validateStatus={formState.errors.duration ? 'error' : ''}
          help={formState.errors.duration?.message}
        >
          <Controller
            name="duration"
            control={control}
            defaultValue="moreThan2:00"
            rules={{ required: 'Duration is required' }}
            render={({ field }) => <Select options={durationOptions} {...field} />}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={formState.errors.email ? 'error' : ''}
          help={formState.errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!formState.isValid}>
            Submit
          </Button>
          <Button type="default" onClick={clearLocalStorage} style={{ marginLeft: '10px' }}>
            Clear
          </Button>
        </Form.Item>
      </Form>
      {persons.length > 0 && (
        <Table dataSource={persons} columns={columns} pagination={false} rowKey="id" key="table" />
      )}
    </>
  );
};
export default PersonForm;
