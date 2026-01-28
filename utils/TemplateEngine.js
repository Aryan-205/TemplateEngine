import { Header, StatCard, DataTable } from './Components';

const PageGenerator = ({ config }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dynamic Header */}
      <Header title={config.title} subtitle={config.subtitle} />

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {config.stats.map((s, i) => (
          <StatCard key={i} label={s.label} value={s.value} color={s.color} />
        ))}
      </div>

      {/* Dynamic Table */}
      <DataTable headers={config.tableHeaders} data={config.tableData} />
    </div>
  );
};

export default PageGenerator;