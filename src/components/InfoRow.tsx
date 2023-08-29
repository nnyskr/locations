import '../styles/info-row.css';

interface InfoProps {
  icon: string;
  infoNode: React.ReactNode;
}

export default function InfoRow({ icon, infoNode, ...props }: InfoProps) {
  return (
    <div className="info-row" {...props}>
      <img data-testid="info-row-icon" src={icon} />
      <p data-testid="info-row-data" className="typography-s ellipsis">
        {infoNode}
      </p>
    </div>
  );
}
