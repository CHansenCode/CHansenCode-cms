export const ObjectViewer = ({ data, fontSize, title, pc, sc }) => {
  const stringedData = JSON.stringify(data, null, 4);
  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      <h4 style={{ color: sc ? sc : 'coral' }}>{title}</h4>
      <p style={{ fontSize: fontSize, color: pc ? pc : 'currentColor' }}>
        {stringedData}
      </p>
    </div>
  );
};
