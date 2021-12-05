import { Input, Textarea, Select } from './';

export const InputField = ({ constructor, formData, setFormData }) => {
  switch (constructor.type) {
    case 'input':
      return (
        <Input
          label={constructor.label}
          infoOnHover={constructor.infoHover}
          value={formData[constructor.key]}
          onChange={e =>
            setFormData({ ...formData, [constructor.key]: e.target.value })
          }
        />
      );
    case 'textarea':
      return (
        <Textarea
          label={constructor.label}
          infoOnHover={constructor.infoHover}
          value={formData[constructor.key]}
          rows={constructor.rows ? constructor.rows : '3'}
          onChange={e =>
            setFormData({ ...formData, [constructor.key]: e.target.value })
          }
        />
      );
    case 'password':
      return (
        <Input
          type="password"
          label={constructor.label}
          infoOnHover={constructor.infoHover}
          value={formData[constructor.key]}
          rows={constructor.rows}
          onChange={e =>
            setFormData({ ...formData, [constructor.key]: e.target.value })
          }
        />
      );
    case 'select':
      return (
        <Select
          constructor={constructor}
          formData={formData}
          setFormData={setFormData}
        />
      );
    default:
      <Input
        label={constructor.label}
        infoOnHover={constructor.infoHover}
        value={formData[constructor.key]}
        onChange={e =>
          setFormData({ ...formData, [constructor.key]: e.target.value })
        }
      />;
  }
};
