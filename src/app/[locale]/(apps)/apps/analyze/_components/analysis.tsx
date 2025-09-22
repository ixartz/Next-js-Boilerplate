'use client';

import { Calendar, Globe, Lightning, Package, Star, TrendUp } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge } from '@/components/ui';

type ProductData = {
  product_information: {
    product_name: string;
    product_general_name: string;
    market_price: number[];
    category_name: string[];
    manufacturer: string;
    SKU_number: string;
    origin: string;
    lifespan: number;
    total_weight: number;
    total_weight_unit: string;
  };
  product_specifications: {
    key_features: string[];
    total_capacity: number;
    total_capacity_unit: string;
    dimensions: number[];
    dimensions_unit: string;
    weight: number;
    weight_unit: string;
    energy_consumption: number;
    energy_consumption_unit: string;
  };
  data_sources: Array<{
    source_title: string;
    source_url: string;
    source_description: string;
  }>;
};

type AnalysisResult = {
  product_data: ProductData;
  timestamp: string;
};

type AnalysisProps = {
  result: AnalysisResult | null;
};

export default function Analysis({ result }: AnalysisProps) {
  if (!result) {
    return null;
  }

  const { product_data } = result;
  const { product_information, product_specifications } = product_data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mx-auto max-w-4xl space-y-8"
    >
      {/* Product Overview */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {product_information.product_name}
            </h2>
            <p className="text-gray-600">{product_information.manufacturer}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Price Range</p>
            <p className="text-2xl font-bold text-green-600">
              $
              {product_information.market_price[0]?.toLocaleString()}
              {' '}
              - $
              {product_information.market_price[1]?.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-gray-700">Categories</p>
          <div className="flex flex-wrap gap-2">
            {product_information.category_name.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
            <Globe className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-700">Origin</p>
              <p className="text-gray-900">{product_information.origin}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
            <Calendar className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-700">Lifespan</p>
              <p className="text-gray-900">
                {product_information.lifespan}
                {' '}
                years
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
            <Package className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm font-medium text-gray-700">Weight</p>
              <p className="text-gray-900">
                {product_information.total_weight}
                {' '}
                {product_information.total_weight_unit}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-xl font-bold text-gray-900">Product Specifications</h3>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Key Features */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <h4 className="font-semibold text-gray-900">Key Features</h4>
            </div>
            <ul className="space-y-2">
              {product_specifications.key_features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 no-underline">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendUp className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold text-gray-900">Technical Specifications</h4>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Capacity:</span>
                <span className="font-medium">
                  {product_specifications.total_capacity}
                  {' '}
                  {product_specifications.total_capacity_unit}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dimensions (W×H×D):</span>
                <span className="font-medium">
                  {product_specifications.dimensions.join(' × ')}
                  {' '}
                  {product_specifications.dimensions_unit}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span className="font-medium">
                  {product_specifications.weight}
                  {' '}
                  {product_specifications.weight_unit}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Energy Consumption:</span>
                <div className="flex items-center gap-2">
                  <Lightning className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">
                    {product_specifications.energy_consumption}
                    {' '}
                    {product_specifications.energy_consumption_unit}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h3 className="mb-6 text-xl font-bold text-gray-900">Data Sources</h3>
        <Accordion type="single" collapsible className="w-full">
          {product_data.data_sources.map((source, index) => (
            <AccordionItem key={index} value={`source-${index}`} className="!no-underline">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2 !no-underline">
                  <span className="font-medium text-gray-900">{source.source_title}</span>
                  {source.source_url !== 'not available' && (
                    <span className="text-xs text-blue-600">• Link available</span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 no-underline">
                {source.source_url !== 'not available' && (
                  <Link
                    href={source.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm text-blue-600 hover:underline"
                  >
                    {source.source_url}
                  </Link>
                )}
                <p className="text-sm text-gray-600">
                  {source.source_description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Analysis Timestamp */}
      <div className="text-center text-sm text-gray-500">
        Analysis completed on
        {' '}
        {new Date(result.timestamp).toLocaleString()}
      </div>
    </motion.div>
  );
}
