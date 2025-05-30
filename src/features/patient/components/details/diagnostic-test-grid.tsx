interface Props {
  tests: { name: string; value: string }[];
}

export const DiagnosticTestsGrid: React.FC<Props> = ({ tests }) => (
  <div className="w-[65%] overflow-y-auto rounded-sm bg-white p-4 shadow-md">
    <h2 className="text-primary mb-2 text-lg font-bold">Testy diagnostyczne</h2>

    <div className="grid grid-cols-3 gap-2">
      {tests.map((test, idx) => (
        <div
          key={idx}
          className="bg-primary flex justify-between rounded-md p-6 shadow-sm"
        >
          <span className="line-clamp-1 text-xs text-white">{test.name}</span>
          <span className="text-xs font-semibold text-white">{test.value}</span>
        </div>
      ))}
    </div>
  </div>
);
