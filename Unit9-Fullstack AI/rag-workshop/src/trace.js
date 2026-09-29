//  this is what "observability" means in
// practice,
//   trace = one full request -> response (one call to ask())
//   span  = one step inside that request (input-check, retrieval, llm-call)
//
// Real tools (Langfuse, Datadog, etc.) do the exact same thing -- record each
// step's input/output/timing -- but add a hosted dashboard, search, cost
// tracking, and alerting on top of it. Understanding this file means you
// understand what those dashboards are actually showing you.
export function startTrace(input) {
  const spans = []; // every span recorded during this one trace, in order

  return {
    // Wrap any step in a span: run fn(), time how long it took, and record
    // its name/timing/output. Whatever fn() returns is passed straight
    // through,
    async span(name, fn) {
      const t = Date.now();
      const output = await fn();
      spans.push({ name, ms: Date.now() - t, output });
      return output;
    },
  };
}