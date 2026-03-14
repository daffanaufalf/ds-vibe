import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { colorPrimitive, colorSemantic, fontSize, spacing, radii, shadows } from "@ds/tokens";

const TokensDoc = () => {
  return (
    <div className="p-8 font-sans bg-white text-slate-900">
      <h1 className="text-4xl font-bold mb-8">Design Tokens</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Colors (Primitives)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.entries(colorPrimitive).map(([group, shades]) => (
            <div key={group} className="flex flex-col gap-2">
              <h3 className="capitalize font-medium">{group}</h3>
              {Object.entries(shades).map(([shade, hex]) => (
                <div key={shade} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded border"
                    style={{ backgroundColor: hex as string }}
                  />
                  <div className="text-xs">
                    <div className="font-mono">{shade}</div>
                    <div className="text-slate-500 uppercase">{hex as string}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Typography (Scale)</h2>
        <div className="flex flex-col gap-6">
          {Object.entries(fontSize).map(([name, size]) => (
            <div key={name} className="flex items-baseline gap-4 border-b pb-4">
              <div className="w-24 font-mono text-sm text-slate-500">{name} ({size})</div>
              <div style={{ fontSize: size }}>The quick brown fox jumps over the lazy dog.</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Spacing</h2>
        <div className="flex flex-col gap-4">
          {Object.entries(spacing).map(([name, val]) => (
            <div key={name} className="flex items-center gap-4">
              <div className="w-16 font-mono text-sm text-slate-500">{name}</div>
              <div className="bg-blue-500 h-6 rounded-sm" style={{ width: val }} />
              <div className="text-xs text-slate-400">{val}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Radii</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(radii).map(([name, val]) => (
            <div key={name} className="flex flex-col gap-2 italic">
              <div
                className="w-full h-24 bg-slate-100 border border-slate-200"
                style={{ borderRadius: val }}
              />
              <div className="text-sm font-mono">{name}: {val}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {Object.entries(shadows).map(([name, val]) => (
            <div
              key={name}
              className="p-8 bg-white rounded-lg flex flex-col items-center justify-center gap-4"
              style={{ boxShadow: val }}
            >
              <div className="font-semibold uppercase">{name}</div>
              <div className="text-xs text-slate-400 font-mono text-center truncate w-full">
                {val}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: "Tokens/Overview",
  component: TokensDoc,
};

export default meta;
type Story = StoryObj<typeof TokensDoc>;

export const Overview: Story = {};
