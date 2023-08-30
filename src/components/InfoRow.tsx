import '../styles/info-row.css';

interface InfoProps {
  icon: string;
  alt?: string;
  infoNode: React.ReactNode;
}

export default function InfoRow({
  icon,
  alt = '',
  infoNode,
  ...props
}: InfoProps) {
  return (
    <div className="info-row" {...props}>
      <img data-testid="info-row-icon" src={icon} alt="icon" />
      <p data-testid="info-row-data" className="typography-s ellipsis">
        {infoNode}
      </p>
    </div>
  );
}
