async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function TestLoadingPage() {
  // Simulate a slow data fetch
  await delay(3000); // 3 second delay

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">Loading Test Page</h1>
      <p>
        If you saw a loading spinner for 3 seconds, the loading screen is
        working correctly!
      </p>
    </div>
  );
}
